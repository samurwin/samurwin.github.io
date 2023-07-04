function validateEmail (email) {
    const validEmailFormat = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;

    if (email.match(validEmailFormat)) {
        return true;
    } else {
        return false;
    }
}

function addObserver(element, options) {
    // Create a new IntersectionObserver instance
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
      //  If intersecting is true if element is visible
        if(entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target)
        }
      }, options)
    });
    // Add the observer to the element                         
    observer.observe(element);
}

function scrollTrigger(selector, options = {}) {
    let elements = document.querySelectorAll(selector);
    
    elements = Array.from(elements);
    
    elements.forEach(el => {
        // attach the IntersectionObserver to the element
        addObserver(el, options);
    })
}

export { validateEmail, addObserver, scrollTrigger }