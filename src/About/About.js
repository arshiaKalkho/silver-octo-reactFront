import React, { Component } from 'react'

export default class About extends Component {
    constructor(){
        super();
        this.state = {layout:"1"}
        this.state = {cardWidth:"25rem"}
    }
    
    toggle = ()=>{
        if(this.state.layout==="1"){
            this.setState({layout:"auto-fit", cardWidth:"22rem"})
        }else
        this.setState({layout:"1", cardWidth:"auto"})
    }
    
    
    render() {
        return (
            <div className="about" style={{backgroundImage:'url("/images/about-background.jpg") '}}>
                <div className="about-toggle-container">
                    <div className="toggle-button" onClick={()=>this.toggle()} style={{backgroundImage:'url("/images/toggle-layout.svg")'}}></div>
                </div>
                
                <div className="about-grid" style={{ gridTemplateColumns: `repeat(${this.state.layout}, ${this.state.cardWidth})`}}>
                        <div className="about-cards" >
                            <h2>Who are we?</h2>
                            <p>We are a small company based on toronto canada, started shipping for amazon and now have our own fully functional system and provide serivces all over the continental US</p>
                        </div>
                        <div className="about-cards">
                            <h2>Our Services</h2>
                            <p>we deliver, we process transactions, we wearohuse. plain and simple. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum eius tenetur! Possimus, adipisci deserunt distinctio aut nisi odio consequuntur impedit inventore repellendus, nesciunt iste blanditiis voluptatem recusandae, expedita molestiae!</p>
                        </div>
                        <div className="about-cards">
                            <h2>How to contact us</h2>
                            <p>email, phone, post, mail careing peagon Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio mollitia possimus sequi ratione et quo repudiandae animi sed rerum accusantium perspiciatis dolorem laudantium, quaerat quas, aspernatur ad? Amet, culpa? Alias!</p>
                        </div>
                        <div className="about-cards">
                            <h2>Other forms</h2>
                            <p>checkout our github for more information on the website and our forms. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur asperiores dolores reprehenderit quam doloribus, deserunt cum quisquam iste quidem, ducimus, a vero ab suscipit. Dolore impedit doloremque nostrum excepturi tenetur!</p>
                        </div>
                        <div className="about-cards">
                            <h2>Careers</h2>
                            <p>at the button of the page use the HR link and there you can contact us about the careers. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis itaque ipsam harum nihil laboriosam, molestias dignissimos quisquam perferendis illo quia? Ullam harum dicta assumenda natus enim voluptas nostrum quasi fuga!</p>
                        </div>
                        <div className="about-cards">
                            <h2>More</h2>
                            <p>please feel free to contact us about any problems you may have. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, officia? Sint quasi accusamus perferendis excepturi animi! Tempore sunt nemo cumque libero doloremque? Quae eligendi nulla ullam sed itaque a culpa.</p>
                        </div>
                </div>
            </div>
            )
    }
}
