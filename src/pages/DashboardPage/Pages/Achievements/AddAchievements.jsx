import React from 'react'

const AddAchievement = () => {
  return (
    <div>

        <form action="" className='flex flex-col'>


            <label htmlFor="">
                Award name or Achievement
            </label>
            <input type="text" />


            <label htmlFor="">
                Description
            </label>
            <textarea name="description" id="description">
            </textarea>


            <label htmlFor="">
                Image of Award or Achievement
            </label>
            <input type="file" />


            <label htmlFor="">
                Date Obtained
            </label>
            <input type="date" />


            <label htmlFor="">
                Name of Organization
            </label>
        </form>
    </div>
  )
}

export default AddAchievement