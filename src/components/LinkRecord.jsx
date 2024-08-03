// import React, { useState } from 'react';
// import axios from 'axios';

// const LinkRecord = () => {
//   const [link, setLink] = useState('');
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setLink(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         'https://harf.roshan-ai.ir/api/transcribe_files/',
//         {
//           media_urls: [link]
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Token a85d08400c622b50b18b61e239b9903645297196'
//           }
//         }
//       );

//       setResponse(res.data);
//       setError(null);
//     } catch (err) {
//       setError('Error processing link');
//       console.error('Error processing link:', err);
//     }
//   };

//   return (
//             <div className='border border-danger py-5 bg-white'style={{borderRadius:'25px'}} >
//             <form onSubmit={handleSubmit} method="post">
//                 <div class="input-with-button">
//                     <input type="text" value={link} onChange={handleChange} placeholder="example.com/sample.mp3" className="form-control"/>
//                     <button type="submit" className="btn btn-danger p-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                             <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
//                             <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
//                         </svg>
//                     </button>
//                 </div>
//             </form>
//             <p className='text-muted w-75 mx-auto'>
//             {response && <div>Response: {JSON.stringify(response)}</div>}
//             {error && <div style={{ color: 'red' }}>{error}</div>}
//                 نشانی اینترنتی فایل حاوی گفتار(صوتی/تصویری)، وارد 
//                 و دکمه را فشار دهید
//             </p>
//         </div>
//   );
// };

// export default LinkRecord;
import React, { useState } from 'react';
import axios from 'axios';

const LinkRecord = () => {
  const [link, setLink] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'https://harf.roshan-ai.ir/api/transcribe_files/',
        {
          media_urls: [link]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token a85d08400c622b50b18b61e239b9903645297196'
          }
        }
      );

      setResponse(res.data);
      setError(null);
    } catch (err) {
      // بررسی اطلاعات دقیق‌تر از خطا
      setError('Error processing link');
      console.error('Error processing link:', err);
      if (err.response) {
        console.error('Response error data:', err.response.data);
        console.error('Response error status:', err.response.status);
        console.error('Response error headers:', err.response.headers);
      } else if (err.request) {
        console.error('Request error data:', err.request);
      } else {
        console.error('Error message:', err.message);
      }
    }
  };

  return (
    <div className='border border-danger py-5 bg-white' style={{borderRadius:'25px'}}>
      <form onSubmit={handleSubmit} method="post">
        <div className="input-with-button">
          <input type="text" value={link} onChange={handleChange} placeholder="example.com/sample.mp3" className="form-control"/>
          <button type="submit" className="btn btn-danger p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
          </button>
        </div>
      </form>
      <p className='text-muted w-75 mx-auto'>
        {response && <div>Response: {JSON.stringify(response)}</div>}
        {error && <div style={{ color: 'red' }}>{error}</div>}
        نشانی اینترنتی فایل حاوی گفتار(صوتی/تصویری)، وارد 
        و دکمه را فشار دهید
      </p>
    </div>
  );
};

export default LinkRecord;

