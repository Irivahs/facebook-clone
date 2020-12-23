import React from 'react'
import "./Widgets.css";


function Widgets() {
    return (
        <div className='widgets'>
            <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fshaviri.alam%2Fposts%2F2311598469090022&show_text=true&width=340&appId=410261423462269&height=681"
            width="340" 
            height="100%"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder='0'
            allowTransparency='true'
            allow="encrypted-media">
            </iframe>
        </div>
    )
}

export default Widgets
