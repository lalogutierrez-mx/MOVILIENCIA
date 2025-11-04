class Header {
    constructor() {
        this.y = 0;
        this.container = window["main-header"];
        window.addEventListener("scroll", (e) => this.onScroll());
				this.onScroll();
    }

    onScroll() {
			if (this.direction == "down") this.scrollDown();
			else this.show(); //Siempre que hagan scrollup debemos mostrar el header
			if (window.scrollY == 0 && !this.inTop) this.reset(); //Si está en top 0 reseteamos
			return this.setY(window.scrollY); //Asignamos a y el valor de window.scrollY
    }
	
		scrollDown() {
			if (window.scrollY > this.height) {
				if (this.inTop) this.setFixed();
				else this.hide();
			}
		}
	
		setY(_y) {
			this.y = _y;
		}

    setFixed() {
        gsap.set(this.container, {
            y: "-100%",
            opacity: 0
        });
        this.container.classList.remove("visible");
        this.container.classList.remove("in-top");
    }

    show() {
        if (this.isVisible) return false;
        this.container.classList.add("visible");
        gsap.to(this.container, 0.25, {
            ease: Power2.easeOut,
            y: "0%",
            opacity: 1
        });
    }

    hide() {
        if (!this.isVisible) return false;
        this.container.classList.remove("visible");
        gsap.to(this.container, 0.25, {
            ease: Power2.easeOut,
            y: "-100%",
            opacity: 0
        });
    }

    reset() {
			this.container.removeAttribute("style");
			this.container.classList.add("visible");
			this.container.classList.add("in-top");
    }

    // getters

    get height() {
        let _rect = this.container.getBoundingClientRect();
        return ~~_rect.height;
    }

    get direction() {
        if (this.y > window.scrollY) return "up";
        else return "down";
    }

    get isVisible() {
        return String(this.container.getAttribute("class")).indexOf("visible") >= 0;
    }
	
	get inTop() {
        return String(this.container.getAttribute("class")).indexOf("in-top") >= 0;
    }
}

const _header = new Header();