import axios from 'axios';

export const request = axios.create({
  baseURL: `https://localhost:1337/api`,
  headers: {
    Authorization: 'bearer ' + `d6e007ddc81d8293a5a131b244120efb6ef01b7e6cf6df5a87562604aef337600064298aa373e345e3ec0ffef57075a47454f91bb9600cdc3bf5e42b3abe9a85b9bda8de512d2adb12871b57e0d7d41ad3b9ab80f34cf099de8b97a02d231177326ed226892dfe1833bfaaca0a1d43ff7c8f7e61369f5d49570670044273ee72`,
  },
});
