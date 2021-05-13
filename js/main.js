const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const aboutContent = document.querySelector('#about-content');
const skillsContent = document.querySelector('#skills-content');



about.addEventListener('click',()=>{
    const aboutBox = new WinBox({
        title: 'About Me',
        width:'400px',
        height:'400px',
        top:50,
        right:50,
        bottom: 50,
        left:50,
        mount: aboutContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        }
    })
})


skills.addEventListener('click',()=>{
    const skillsBox = new WinBox({
        title: 'My Skills',
        background:'#00aa00',
        width:'400px',
        height:'400px',
        top:50,
        right:50,
        bottom: 50,
        left:50,
        mount: skillsContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        }
    })
})