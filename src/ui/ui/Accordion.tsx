import React, { useState } from 'react'
import "./According.css"

  const AccordingItem = ({title, content}) => {
  const [view, setview] = useState(false)

  return(
    <div className='according'>
      <div className='accord' onClick={() => setview(prev => !prev)}>
        <h2>{title}</h2>
        <span>{view? "_":"+"}</span>
      </div>
         {
          view &&
          <p>{content}</p>
        }
    <hr/>
    </div>
  );
  }

 const Accordion = () => {
  const data = [
    {title:"Is CoinGecko API free?", content:"CoinGecko API offers both free and paid plans. The Demo API plan is accessible to all CoinGecko users at zero cost, with a stable rate limit of 30 calls/min and a monthly cap of 10,000 calls. Paid plans start at $129/mo, offering a higher rate limit of 500 calls/min and a monthly cap of 500,000 calls."},

    {title:"Is CoinGecko API free?", content:"CoinGecko API offers both free and paid plans. The Demo API plan is accessible to all CoinGecko users at zero cost, with a stable rate limit of 30 calls/min and a monthly cap of 10,000 calls. Paid plans start at $129/mo, offering a higher rate limit of 500 calls/min and a monthly cap of 500,000 calls."},

    {title:"Is CoinGecko API free?", content:"CoinGecko API offers both free and paid plans. The Demo API plan is accessible to all CoinGecko users at zero cost, with a stable rate limit of 30 calls/min and a monthly cap of 10,000 calls. Paid plans start at $129/mo, offering a higher rate limit of 500 calls/min and a monthly cap of 500,000 calls."},

    {title:"Is CoinGecko API free?", content:"CoinGecko API offers both free and paid plans. The Demo API plan is accessible to all CoinGecko users at zero cost, with a stable rate limit of 30 calls/min and a monthly cap of 10,000 calls. Paid plans start at $129/mo, offering a higher rate limit of 500 calls/min and a monthly cap of 500,000 calls."},

    {title:"Is CoinGecko API free?", content:"CoinGecko API offers both free and paid plans. The Demo API plan is accessible to all CoinGecko users at zero cost, with a stable rate limit of 30 calls/min and a monthly cap of 10,000 calls. Paid plans start at $129/mo, offering a higher rate limit of 500 calls/min and a monthly cap of 500,000 calls."}
    
  ]

  return (
 <div className='tion'>
  {
data.map((item, index) => (
<AccordingItem key={index} title={item.title}  content={item.content}/>
))
  }
 </div>
  )
}

export default Accordion;
