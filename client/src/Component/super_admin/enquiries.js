import React from 'react'
import "./superadmin.css"
import { FaArrowLeft } from "react-icons/fa";
import Usercard from './usercard'

function enquiries() {
  return (
    <div className='EnquiryPage'>
        <div className='CardTop'>
            <div className='CardTop-Left'>
                <div className='enquiryBtn'>
                    <button>
                        <FaArrowLeft />
                    </button>
                </div>
                <div className='enquiryTitle'>
                    <h2>Enquiries</h2>
                </div>
            </div>
            <div className='CardTop-Right'>
                <div className=''>
                    Select
                </div>
                <div className='SelectForm'>
                    <form action="">
                        <select name="" id="">
                            <option value="SELECT">Recent</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
        <Usercard />
        <Usercard />
        <Usercard />
        <Usercard />
        <Usercard />
        <Usercard />
        <Usercard />
        <Usercard />
        <Usercard />
    </div>
  )
}

export default enquiries