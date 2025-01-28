import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from 'react-redux';
import { updateFormData } from '../../redux/action';
import { bucket3, databases3 } from "../../appwrite/config3";
import SkelCard from "../Skeleton/SkelCard";

function Card() {
    const formData = useSelector(state => state.form.formData);
    console.log("here is formdata", formData);
    const [maq, setmaq] = useState([]);
    const [malik, setMalik] = useState([]);
    const [loading, setLoading] = useState(true);
    const [maslo, setMaslo] = useState(true)

    const mila = useCallback(() => {
        let found = false;
        let matchedItem = null;

        maq.forEach((item) => {
            if (
                formData.departmentName.toLowerCase().trim() === item.Dep.toLowerCase().trim() &&
                formData.year.toLowerCase().trim() === item.year.toLowerCase().trim() &&
                formData.semester.toLowerCase().trim() === item.semester.toLowerCase().trim() &&
                formData.subjectName.toLowerCase().trim() === item.sub.toLowerCase().trim()
            ) {
                matchedItem = item;
                found = true;
            }
        });

        if (found && matchedItem) {
            setMalik((prevMalik) => [...prevMalik, matchedItem]);
            setMaslo(false);
        } else {
            console.log('No matching object found');
        }
    }, [maq, formData]);

    useEffect(() => {
        see();
    }, []);

    useEffect(() => {
        if (maq.length > 0 && formData !== null) {
            mila();
        }
    }, [maq, formData, mila]);

    const see = async () => {
        try {
            const u = await databases3.listDocuments(process.env.REACT_APP_DB2_ID3,process.env.REACT_APP_MEMBERSHIP_COLLECTION_ID);
            console.log("Fetched documents", u.documents);
            setmaq(u.documents);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const images = [
        '/pic/notes.png',
    ];
    
    const handleViewClick = (url) => {
        window.open(url, '_blank');
    }

    useEffect(() => {
        console.log("Matched state:", malik);
    }, [malik]);

    if (loading) {
        return <div className="flex items-center justify-between text-9xl mt-40 "><SkelCard/></div>;
    }

    return (
        <div className="flex items-center px-4 sm:px-8 md:px-11 justify-center mt-16 mb-16 min-h-screen">
            <div className="bg-white p-5 sm:p-10 rounded-lg shadow-lg w-full">
                <h1 className="pt-0 text-3xl sm:text-4xl md:text-5xl text-center">Here are your Notes</h1>
                <div className='m-auto mt-5 shadow-custom-green w-1/6'></div>
                {maslo ? (
                    <div className="text-center bold text-red-700 pt-6 text-xl"> Sorry! We do not have notes according to your input </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                        {malik && malik.map((d) => (
                            <div className="flex items-center justify-center bg-orange-200 p-5 rounded-xl shadow-lg" key={d.$id}>
                                <div className="flex flex-col items-center justify-center p-5 w-full">
                                    <div className="rounded-xl overflow-hidden">
                                        <img src={images[0]} alt="Notes" className="w-full h-auto object-cover" />
                                        <h5 className="text-xl sm:text-2xl md:text-3xl font-medium mt-3">Title : {d.sub}</h5>
                                        <p className="text-slate-500 text-base sm:text-lg mt-3">
                                            <span className="bg-orange-200 text-black">Desc:</span> {d.reason}
                                        </p>
                                        <p>Provider Name: {d.Name}</p>
                                    </div>
                                    <button onClick={() => handleViewClick(d.imgurl)} className="mt-3 text-center px-16 bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out md:w-full">Download</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;
