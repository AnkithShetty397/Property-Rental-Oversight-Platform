/** @type {import('./$types').PageLoad} */
export const load = async()=>{
    //let response = await fetch(`http://localhost:3000/api/house/getHouseDetails?${house_no}`);
    //const res = await response.json()

    return {
        "messages": [
          {
            "name": "Alice",
            "message": "Hello, how are you?",
            "sender": "user"
          },
          {
            "name": "Bob",
            "message": "I'm good, thanks!",
            "sender": "user"
          },
          {
            "name": "Charlie",
            "message": "Has anyone seen the latest report?",
            "sender": "user"
          },
          {
            "name": "Manager",
            "message": "Yes, I have it. I'll send it to you shortly.",
            "sender": "manager"
          },
          {
            "name": "Eve",
            "message": "Could you please clarify the deadline for the project?",
            "sender": "user"
          },
          {
            "name": "Manager",
            "message": "The deadline is next Friday.",
            "sender": "manager"
          },
          {
            "name": "Alice",
            "message": "Thanks!",
            "sender": "user"
          }
          ,{
            "name": "Manager",
            "message": "Yes, I have it. I'll send it to you shortly.",
            "sender": "manager"
          },
          {
            "name": "Eve",
            "message": "Could you please clarify the deadline for the project?",
            "sender": "user"
          },
        ]
      }
      
}
