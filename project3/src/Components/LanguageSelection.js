import React from 'react'

const LanguageSelection = () => {
  return (
    <div>
        <form action="/">
            <label htmlFor="Language">Choose a language: </label>
            <select id="languageSelector" name='lang'>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
            </select>
        </form>
    </div>
  )
}

export default LanguageSelection