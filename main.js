gsap.registerPlugin(ScrollTrigger);

      const bodyScrollBar = Scrollbar.init(document.body, {
        damping: 0.1,
        delegateTo: document,
        alwaysShowTracks: true,
        speed: 0.2,
      });
      ScrollTrigger.scrollerProxy("body", {
        scrollTop(value) {
          if (arguments.length) {
            bodyScrollBar.scrollTop = value;
          }
          return bodyScrollBar.scrollTop;
        },
      });
      bodyScrollBar.addListener(ScrollTrigger.update);
      ScrollTrigger.defaults({
        scroller: document.body,
      });
      gsap.to(".text p", {
        backgroundPositionX: "0%",
        stagger: 1,
        scrollTrigger: {
          trigger: ".text p",
          scrub: 1,
          start: "top center",
          end: "bottom top",
        },
      });