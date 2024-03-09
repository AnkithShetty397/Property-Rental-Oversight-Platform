<script>
    import { goto } from '$app/navigation';
    import { user_id, block_no,user_type } from '$lib/global.js'
    /** @type {import('./$types').PageData} */
    export let data
    let newMessage = ""
    
    function sendMessage() {
      let messageToSend = newMessage;

      const requestBody = {
          user_id: user_id,
          block_no: block_no,
          sender:user_type,
          message: messageToSend
      };

      fetch('http://localhost:3000/api/groupchat/addMessage', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`)
          }
          console.log('Message sent successfully')
          messageToSend=""
          goto("/loginpage/components/user/groupchat/chat2")
      })
      .catch(error => {
          console.error('Error sending message:', error)
      });
  } 
  
</script>

<body>
  {#await data.streamed.messages}
    <p>loading</p>
  {:then messages}
   <div class="wrapper">
     <div class="scrollable-container">
       <div class="conversation-container">
         {#each data.streamed.messages as message}
         <div class="message-container {message.sender === 'manager' ? 'manager-message' : ''}">
             <div class="user-image">
               <img src="http://localhost:3000/api/profile/getProfilePicture?user_id={message.user_id}" alt="" class="user-avatar">
             </div>
             <div class="message-content">
               <p><strong>{message.name}</strong></p>
               <p>{message.message}</p>
             </div>
           </div>
         {/each}
       </div>
     </div>
     <div class="input-container">
      <input type="text" bind:value={newMessage} placeholder="Type your message...">
      <button on:click={sendMessage}>Send</button>
    </div>
   </div>
  {/await}
 </body>
 
 <style>
   .wrapper {
     width: 1100px; 
     height: 530px;
     margin: 0 auto;
     position: relative;
   }
   
   .scrollable-container {
     height: 478px; 
     overflow-y: auto;
   }

   .scrollable-container::-webkit-scrollbar {
    width: 10px;
    }

    .scrollable-container::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    .scrollable-container::-webkit-scrollbar-thumb {
    background: #888;
    }

    .scrollable-container::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
 
   .conversation-container {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     padding: 10px;
   }
 
   .message-container {
     display: flex;
     align-items: flex-start;
     margin-bottom: 10px;
   }
 
   .user-image {
     margin: 10px 10px 0px 10px;
   }
 
   .user-avatar {
     width: 40px;
     height: 40px;
     border-radius: 50%;
   }
 
   .message-content {
     max-width: 80%; 
     padding: 10px;
     border-radius: 10px;
     background-color: #647573;
   }
 
   .message-content p {
     margin: 0;
   }
 
   .manager-message {
     background-color: #57a6cd; 
     color: #000; 
     border-radius:15px;
   }

   .input-container {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 1100px; 
      padding: 10px;
      background-color: #f0f0f0;
      border-top: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  
    .input-container input {
      padding: 10px;
      border: none;
      border-radius: 5px;
      margin-right: 10px;
      flex: 1;
    }
  
    .input-container button {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .input-container button:hover {
      background-color: #0056b3;
    }
 </style>
