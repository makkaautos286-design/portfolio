// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.navbar')) {
        if (navLinks) {
            navLinks.classList.remove('active');
        }
    }
});

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        // Animation effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
        
        // Show notification
        showNotification('Product added to cart!');
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Message sent successfully!');
        this.reset();
    });
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Style the notification
    notification.style.position = 'fixed';
    notification.style.top = '80px';
    notification.style.right = '20px';
    notification.style.background = 'linear-gradient(135deg, #ff6b6b, #4ecdc4)';
    notification.style.color = 'white';
    notification.style.padding = '1rem 2rem';
    notification.style.borderRadius = '50px';
    notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    notification.style.zIndex = '9999';
    notification.style.display = 'flex';
    notification.style.alignItems = 'center';
    notification.style.gap = '0.5rem';
    notification.style.animation = 'slideIn 0.3s ease';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


function sendFooterMessage(event) {
    event.preventDefault(); // Form submit rokta hai
    
    // Message le rahe hain
    var message = document.getElementById('footerMessage').value;
    
    // Current date aur time bhi add kar rahe hain (optional)
    var now = new Date();
    var dateTime = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    
    // WhatsApp message banate hain
    var whatsappMessage = "*Hi I am Coming From Your Website*%0A%0A" +
                          "*Message:*%0A" + message + "%0A%0A" +
                          "*Date/Time:* " + dateTime;
    
    // APNA WHATSAPP NUMBER YAHAN LAGAO
    var phoneNumber = "923226858721"; // 👈 Isko apne number se change karo!
    
    // WhatsApp URL
    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + whatsappMessage;
    
    // WhatsApp open karo
    window.open(whatsappURL, '_blank');
    
    // Form clear karo
    document.getElementById('footerMessage').value = '';
    
    // Success message (optional)
    alert("Message ready! Opening Whatsapp");
}