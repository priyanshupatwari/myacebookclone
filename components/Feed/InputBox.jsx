import { useRef, useState } from "react";
import { useSession } from 'next-auth/client';
import Image from 'next/image';
import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { FaUserCircle } from "react-icons/fa";
import { db, storage } from "../../firebase";
import firebase from 'firebase';
import { toast } from 'react-toastify';
const InputBox = () => {
  const [session] = useSession();
  const inputRef = useRef('');
  const filePickerRef = useRef('');
  const [imageToPost, setImageToPost] = useState(null);
  const [progressWidth, setProgressWidth] = useState(0);
  const sendPost = (e) => {
    e.preventDefault();
    if (!session) {
      toast.info("Please login to continue."); return;
    }
    if (!inputRef.current.value) { toast.info("Please write few words."); return };
    // how this works:
    // #1. post message 
    // #2.get posted-message's id 
    // #3.use the obtained id to post image in storage with the same id  
    // #4.obtain the posted-image's link, then insert it in the document(having same id)

    db.collection('posts')
      .add({// #1.
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then((doc) => {// #2.
        // after posting the "whats on your mind..." text, POST the image if selected
        if (imageToPost) {// #3.
          const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url');
          removeImage();
          uploadTask.on(
            'state_change',
            (snapshot) => { //for Progress bar
              var percent = snapshot.bytesTransferred / snapshot.totalBytes * 100;
              console.log(percent + "% done");
              percent < 100 ? setProgressWidth(Math.ceil(percent)) : setProgressWidth(0);

            },
            (error) => console.log(error),
            () => { // when the upload completes //get the download URL of the image and insert
              storage.ref('posts') // #4. 
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection('posts').doc(doc.id).update({
                    postImage: url
                  });
                })
            }
          )
        }
      })
    inputRef.current.value = "";
  }
  const addImageToPost = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    // console.log(e.target);
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    } //below is async function ie loads after everythingelse has loaded
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result); //imageToPost is actually converted in base 64 STRING
      // console.log(`imagetopost`,imageToPost);
    }
  }
  const removeImage = () => {
    setImageToPost(null);
  }
  return (
    <div className="mx-2 mt-6 font-medium text-gray-500 bg-white shadow-md rounded-2xl overflow-hidden">
      <div style={{ width: progressWidth + '%' }} className="bg-blue-700 top-0 h-1"></div>
      {/* USER INPUT PART */}
      <div className="flex items-center p-3 space-x-2">
        {/* User's Picture */}
        {session ?
          (<Image
            className="rounded-full"
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
          />) : <FaUserCircle className="rounded-full w-8 h-8" />
        }

        {/* Text Input from user */}
        <form className="flex items-center flex-1 space-x-2 ">
          <input
            ref={inputRef}
            className="flex-grow flex-shrink w-2 h-12 px-5 transition-shadow bg-gray-100 rounded-full focus:outline-none focus:shadow-lg focus:bg-gray-50 focus:border-2"
            type="text"
            placeholder={`What's on your mind, ${session ? session?.user.name : "Buddy"}`}
          />
          {/* Displays selected File */}
          {imageToPost && (
            <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-300 transform hover:scale-[1.06] cursor-pointer w-10 sm:w-14 hover:shadow-lg ">
              <img src={imageToPost} className="object-contain h-8" />
              <p className="text-xs text-center text-red-500">Remove</p>
            </div>
          )}
          {/* click here to POST finally everything */}
          <button onClick={sendPost} type="submit" className="buttonPost " >Post</button>
        </form>
      </div>

      {/* ICONS PART */}
      {/* Live Video */}
      <div className="flex items-center justify-around" >
        <div className="inputIcon" onClick={() => toast.info("Feature coming soon !")}>
          <VideoCameraIcon className="h-5 text-red-500 sm:h-6" />
          <p className="text-xs sm:text-sm">Live Video</p>
        </div>
        {/* File upload -- Video / Photo */}
        <div className="inputIcon" onClick={() => filePickerRef.current.click()}>
          <CameraIcon className="h-5 text-green-400 sm:h-6" />
          <p className="text-xs sm:text-sm">Video / Photo</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost} type="file" hidden
          />
        </div>
        {/* Feeling / Activity */}
        <div className="inputIcon" onClick={() => toast.info("Feature coming soon !")}>
          <EmojiHappyIcon className="h-5 text-yellow-300 sm:h-6" />
          <p className="text-xs sm:text-sm">Feeling / Activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox
