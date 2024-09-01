// Scroll Progress Bar
window.addEventListener('scroll', function () {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = `${scrollPercentage}%`;
});

// Header Scroll Effect
window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 100);
});

let slideIndex = 0;
const slides = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlides(n) {
  slideIndex = n;

  const transformPercentage = -(slideIndex * 100);
  slides.style.transform = `translateX(${transformPercentage}%)`;

  // Update the dots to reflect the active slide
  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

// Set up initial slide and dot
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(n);
}


document.addEventListener('DOMContentLoaded', function () {
    const monthlyBtn = document.getElementById('monthly');
    const yearlyBtn = document.getElementById('yearly');
    const cards = document.querySelectorAll('.card h3');

    monthlyBtn.addEventListener('click', () => {
        monthlyBtn.classList.add('active');
        yearlyBtn.classList.remove('active');
        cards.forEach((card, index) => {
            if (index === 0) card.innerHTML = '$50 <span>/month</span>';
            if (index === 1) card.innerHTML = '$100 <span>/team/month</span>';
            if (index === 2) card.innerHTML = '$150 <span>/user/month</span>';
        });
    });

    yearlyBtn.addEventListener('click', () => {
        yearlyBtn.classList.add('active');
        monthlyBtn.classList.remove('active');
        cards.forEach((card, index) => {
            if (index === 0) card.innerHTML = '$500 <span>/year</span>';
            if (index === 1) card.innerHTML = '$1000 <span>/team/year</span>';
            if (index === 2) card.innerHTML = '$1500 <span>/user/year</span>';
        });
    });
});

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');

        if (item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            item.classList.add('active');
        }
    });
});
document.getElementById('special-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Check if the message box already exists
    if (!document.getElementById('dynamic-message-box')) {
        // Create a new div element
        var messageBox = document.createElement('div');
        messageBox.id = 'dynamic-message-box';
        messageBox.style.padding = '20px';
        messageBox.style.border = '1px solid black';
        messageBox.style.width = '80%'; 
        messageBox.style.maxWidth = '1000px'; 
        messageBox.style.margin = '0 auto';
        messageBox.style.height = 'auto';
        messageBox.style.backgroundColor = '#f9f9f9';
        messageBox.style.position = 'fixed';
        messageBox.style.top = '50%';
        messageBox.style.left = '50%';
        messageBox.style.transform = 'translate(-50%, -50%)';
        messageBox.style.zIndex = '1000';
        messageBox.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)'; 
        messageBox.style.textAlign = 'right';

        
        var messageContent = document.createElement('p');
        messageContent.textContent = `عزيزي محمد إبراهيم، 

نحن نعلم أن المثابرة في مواجهة التحديات هي من صفات الرجال الأقوياء، وأن تحقيق إنجازات ذاتية هو أمر رائع. لكن عندما يكون هذا الإنجاز من أجل تقديم أفضل ما لديك لعائلتك، لكي تراهم يعيشون في سعادة ورضا، فإن هذا ليس بالأمر السهل. ومع ذلك، فأنك قادر على تحقيق ذلك.
تذكر دائمًا أن اهتمامك بعائلتك ودراستك وتحدياتك الشخصية سيعود عليك بالخير، وسيكون له أثر إيجابي على كل جانب من جوانب حياتك. استمر في المضي قدمًا، لأن النجاح الحقيقي يكمن في المثابرة والإصرار.
شكراً لك يا صديقي، على ما تقدمه من جهد وعطاء.
تحياتي iti summer G2
❤️❤️❤️أتمنى أن تكون هذه الرسالة قد نقلت الشعور بالتحفيز والمثابرة بشكل جيد.`;
        messageContent.style.whiteSpace = 'pre-wrap'; // Preserves formatting in text
        messageBox.appendChild(messageContent);

        // Create a close button
        var closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.style.marginTop = '50px';
        closeButton.style.backgroundColor = '#23476a';
        closeButton.style.color = '#fff';
        closeButton.style.border = 'none';
        closeButton.style.cursor = 'pointer';
        closeButton.style.borderRadius = '5px';
        closeButton.style.padding = '5px 25px';
        closeButton.onclick = function() {
            document.body.removeChild(messageBox);
        };
        messageBox.appendChild(closeButton);

        // Append the message box to the body
        document.body.appendChild(messageBox);
    }
});


