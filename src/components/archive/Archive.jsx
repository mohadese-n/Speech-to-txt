import { GREEN } from "../helpers/color";
import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import { AppContext } from "../../context/AppContext";

const Archive = () => {
    const [files, setFiles] = useState([]);
    const { transcript, setTranscript } = useContext(AppContext);
    const [transcripts, setTranscripts] = useState([]);

    useEffect(() => {
        // دریافت transcripts از سرور
        axios.get('http://localhost:9000/transcripts')
            .then(response => {
                setTranscripts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [transcripts]);

        const fetchFiles = async () => {
          try {
            const response = await axios.get('http://localhost:9000/files');
            setFiles(response.data);
          } catch (error) {
            console.error('Error fetching files', error);
          }
        };
    
        fetchFiles();
        const handleDelete = async ({files}) => {
            const endpoint = "http://localhost:9000/files";
        
            try {
              const response = await axios.delete(`${endpoint}/${files}`, {
                headers: {
                        "key": "Authorization",
                        "value": "Token a85d08400c622b50b18b61e239b9903645297196",
                        "type": "text"
                }
                
              });
        
              console.log('File deleted successfully:', response.data);
            } catch (error) {
              console.error('There was a problem with the delete operation:', error);
            }
          };
        

      if (files.length===0) {
        return (
            <div className="text-center mt-5">
                <h2 className="my-5" style={{color:GREEN}}>آرشیو شما خالی است...</h2>
                <img src={require("../../assets/no-found.gif")} alt="not found" className="w-25" />
            </div>
            )
      }
    else{
        return (
            <div className="container mt-5">
                <h2 className="text-right mb-5" style={{color:GREEN}}>آرشیو من</h2>
                <table className="table borderless text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="text-right">نام فایل</th>
                            <th>تاریخ بارگذاری</th>
                            <th>نوع فایل</th>
                            <th>مدت زمان</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {files.map(file => (
                        <>
                        <tr className="tr-hover">
                            <td>
                                <svg className="bg-danger rounded-circle text-white p-1" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                            </td>
                            <td>
                                {file.name}                               
                            </td>
                            <td>
                                {file.date}
                            </td>
                            <td>
                                {file.type}
                            </td>
                            <td>
                                {file.time}
                            </td>
                            <td>
                                <div className="d-flex justify-content-between text-muted">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777" className="download" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777" className="paste" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z"/><path d="M13 3v6h6"/></svg>                            
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777" className="copy" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                    {/* <button onClick={()=>handleDelete('123456')}> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777" className="trash" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                    {/* </button> */}
                                </div>
                            </td>
                           </tr>
                           </>
      ))}
      {transcripts.map(trans => (
        <tr className="tr-hover">
        <td>
            {/* <svg className='btn rounded-circle text-white bg-success' xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c-1.7 0-3 1.2-3 2.6v6.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V4.6C15 3.2 13.7 2 12 2z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18.4v3.3M8 22h8"/></svg> */}
            <svg className='p-1 rounded-circle text-white' style={{backgroundColor:GREEN}} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-1.7 0-3 1.2-3 2.6v6.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V4.6C15 3.2 13.7 2 12 2z"></path><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18.4v3.3M8 22h8"></path></svg>
        </td>
        <td>
            {trans.text}                               
        </td>
        <td>
            {trans.date}
        </td>
        <td>
            {trans.type}
        </td>
        <td>
            {trans.time}
        </td>
        <td>
            <div className="d-flex justify-content-between text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777" className="download" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777" className="paste" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z"/><path d="M13 3v6h6"/></svg>                            
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777" className="copy" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                {/* <button onClick={()=>handleDelete('123456')}> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#777" className="trash" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                {/* </button> */}
            </div>
        </td>
       </tr>
      ))}
                    </tbody>
                    
                </table>
            </div>
            )
    }
}
export default Archive;