i/*
  =====  Footer =====
*/

class footerSecion extends HTMLElement{
    connectedCallback(){
      this.innerHTML =`
      <section class="contact">
      <div class="text-box">
        <h1>Enroll For Our Various Online Courses
          <br>  Anywhere from the World</h1>
            <button class="btn"><a class="white"> Visit us to know more</a></button>
      </div>
    </section>
      <section class="about">
      <h2>About Us</h2>
      <p>We're a leading research university with a heart. Founded in the decade  after Ghana became a republic was signed, we're the nation's oldest Catholic and Jesuit university.
          We're a community of people who bridge our disparate experiences and identities. Meet the people and places that make East Coast home.</p>
      
         
                   
      </div>
      <br/>
      <h4 class="rights">All Rigths are Reserved  Alton</h4>
  </section>
      `
    }
  }
//   customElements.define('my-header', MyHeader);
  customElements.define("footer-section",footerSecion);
  i
