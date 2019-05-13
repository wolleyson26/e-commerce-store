import React from 'react'
import Title from '../Title'
import styled from 'styled-components'

export default function Info() {
    return (
        <SectionWrapper>
            <div className="ui container">
                <div className="mb"></div>
                <Title title='about us' />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur provident odit eos, totam nostrum commodi obcaecati sed illum est harum? Voluptas sunt ullam, totam in accusantium officiis porro consequuntur exercitationem recusandae vitae quis quod earum dolor optio voluptatem tenetur repudiandae, debitis molestias. Voluptatem, sit officia eaque error distinctio debitis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda nobis at soluta ullam modi repudiandae iusto voluptatum, debitis dolor praesentium aperiam possimus rerum sed dicta? Commodi, ipsum voluptatum nihil, aspernatur debitis minus repellat est mollitia consequuntur aliquam suscipit numquam quaerat eaque eius iusto. Ex eaque veritatis ipsum sint esse?</p>
            </div>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.section`
 
    min-height: 58vh; 
`
