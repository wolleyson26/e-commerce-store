import React, { Component } from 'react'
import styled from 'styled-components'
import { FaDolly, FaRedo, FaDollarSign } from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state = {
        services: [
            {
                id: 1,
                icon: <FaDolly />,
                title: 'free shipping',
                text: 'Free Shipping on select items'
            },
            {
                id: 2,
                icon: <FaRedo />,
                title: '30 days return policy',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, maiores.'
            },
            {
                id: 3,
                icon: <FaDollarSign />,
                title: 'secured payment',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, maiores.'
            }
        ]
    }
    render() {
        return (
            <ServicesWrapper>
                <div className="ui container">
                    <Title title='services' center='center' />
                    <div className="ui stackable grid">
                        {
                            this.state.services.map(item => {
                                return (
                                    <div className="five wide column text-center"
                                        key={item.id}>
                                        <div className="service-icon mt">{item.icon}</div>
                                        <div className="text-capitalize text mt">{item.title}</div>
                                        <div className='mt mb'>{item.text}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </ServicesWrapper>
        )
    }
}

const ServicesWrapper = styled.div`
    background: rgba(215,130,186,.5);
    margin-top: 0px;
    padding: 20px;
    text-align:center; 
    .service-icon {
        font-size: 2.5rem;
        color: var(--darkOrange); 
    }
    
    @media (max-width:768px){
        margin-top: 0px;
      }

`
