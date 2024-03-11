import { user_id } from '$lib/global.js';

/** @type {import('./$types').PageLoad} */
export const load = async()=>{
  const response = await fetch(`http://localhost:3000/api/user/getUserDetails?user_id=${user_id}`);
  const resp = await response.json()
  const res = resp[0]
  return {
    info: res
  } 
}