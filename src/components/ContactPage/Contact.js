import React from 'react'
import Title from '../Title'

export default function Contact() {
    return (
        <section>
            <Title title='contact us' />
            <form class="ui form">
                <div class="field">
                    <label>Full Name</label><input name='name' placeholder="Full Name" />
                </div>
                <div class="field">
                    <label>Email</label><input name='email' placeholder="@example@example.com" />
                </div>
                <div class="field">
                    <label>Subject </label><input placeholder="Subject" />
                </div>
                <div class="field">
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Please enter your message'></textarea>
                </div>
                <button type="submit" class="ui basic button">Submit</button>
            </form>
        </section >
    )
}
