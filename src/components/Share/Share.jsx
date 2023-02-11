import React from 'react'
import { ShareBottom, ShareContainer, ShareHr, ShareIcon, ShareImage, ShareInput, ShareOption, ShareOptions, ShareOptionText, ShareTop, ShareWrapper, ShareButton } from './Share.elem'
import img1 from '../../Images/Clifb.jpg';
import { ShareOptionMethod } from '../../utils/data';

const Share = () => {
  return (
    <ShareContainer>
      <ShareWrapper>
        <ShareTop>
          <ShareImage src={img1} alt='Profile-image' />
          <ShareInput  placeholder="Say what's is in your mind" />
        </ShareTop>
        <ShareHr/>
          <ShareBottom>
            <ShareOptions>
              {ShareOptionMethod.map((items, i) =>(
                <>
                <ShareOption key= {i}>
                  <ShareIcon key={i} style={{color: items.color}}>
                    {items.icon}
                    </ShareIcon>
                    <ShareOptionText key={i} >
                     {items.text}
                    </ShareOptionText>
                  
              </ShareOption>
                </>
              ))}
              
            </ShareOptions>
            
          </ShareBottom>
          <ShareButton>Share</ShareButton>
      </ShareWrapper>
    </ShareContainer>
  )
}

export default Share