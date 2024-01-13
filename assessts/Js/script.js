//script for the navigation bar...
//start script

    
        // Toggle Menu Icon ========================================
     

        //change navbar against viewport
        document.addEventListener('DOMContentLoaded', function() {
            var navbar = document.getElementById('navbar');
            var distanceFromTop = 100; // Adjust this value based on how far down you want the change to occur
        
            function handleScroll() {
                if (window.scrollY > distanceFromTop) {
                    navbar.classList.add('nav-scrolled');
                } else {
                    navbar.classList.remove('nav-scrolled');
                }
            }
        
            handleScroll(); // Initial check on page load
        
            window.addEventListener('scroll', handleScroll);
        });
        

        // ----------image silder starts------- 




        let slide = document.querySelectorAll('.slide');
        var current = 0;
        
        function cls(){
            for(let i = 0; i < slide.length; i++){
                  slide[i].style.display = 'none';
            }
        }
        
        function next(){
            cls();
            if(current === slide.length-1) current = -1;
            current++;
        
            slide[current].style.display = 'block';
            slide[current].style.opacity = 0.4;
        
            var x = 0.4;
            var intX = setInterval(function(){
                x+=0.1;
                slide[current].style.opacity = x;
                if(x >= 1) {
                    clearInterval(intX);
                    x = 0.4;
                }
            }, 100);
        
        }
        
        function prev(){
            cls();
            if(current === 0) current = slide.length;
            current--;
        
            slide[current].style.display = 'block';
            slide[current].style.opacity = 0.4;
        
            var x = 0.4;
            var intX = setInterval(function(){
                x+=0.1;
                slide[current].style.opacity = x;
                if(x >= 1) {
                    clearInterval(intX);
                    x = 0.4;
                }
            }, 100);
        
        }
        
        function start(){
            cls();
            slide[current].style.display = 'block';
        }
        start();
        //add time interval for automTIC slide, change every 3seconds
        setInterval(next, 5000);
/* --------image slider ends here---------- */




//end script