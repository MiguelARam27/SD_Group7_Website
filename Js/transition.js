import Highway from '@dogstudio/highway';
import {TimelineLite}  from 'gsap';

class Fade extends Highway.Transition{
    in({from,to,done}){
    const timeline = new TimelineLite();
    timeline.fromTo(to,0.5,{left:'-100%',top: '50%'},{left:'0%'})
    .fromTo(to,0.5,{height:'2vh'}, {height:'90vh',top:"10%", onComplete:function(){done();}}
    );
    }
    out({from,done}){
        done();
        fromTo.remove();
    }
}

export default Fade;