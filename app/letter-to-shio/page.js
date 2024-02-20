"use client";
import React from 'react';
import './styles.css';

function FadeInSection(props) {
  let [isVisible, setVisible] = React.useState(false);
  let domRef = React.useRef();

  React.useEffect(() => {
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}


export default function Letter() {
  let [letterPart, setLetterPart] = React.useState(0);
  let part = [
    {
      id: 1,
      html: <>
        Your health had left my sphere of concern out of the belief that you surround yourself of influences that would produce less indignation than if it were to include me. I may naturally prod you into thinking otherwise, but the intent is near zero. The angle's to update my version of you as its been so long, but in demanding inquiries instead of <span><i>how are you</i></span>'s that gives access to goal-staggering responses.
      </>
    },
    {
      id: 2,
      html: <>
        We're both facing large competition—that is if we still share the same race. The pool's become oversaturated yet there's still a high demand, a truth that weighs heavy especially in <span className="text-cyan-300 hover:text-cyan-700"><a href="https://www.bing.com/search?q=what+is+fud" target="_blank" rel="noopener noreferrer">FUDS</a></span>. But if already realized that this is a separate truth and that you have already given much thought plus considerations to where your outcomes lie, then call it to my attention, else, doubts will be harbored. The global need only continues to grow and its fortune gave hopes for people only for them to be reduced to incompetence and self-loathing. You should be aware at this point that our career choice eventually multiplies into ones narrower, and the value of pedigree had only been depreciating since degree inflation and especially since 2020’s Executive Order of skill-based hiring. Speaking of, I hear you still work. To what does this satisfy? Debt, non-essentials—or conveniently, to gain pleasure or to avoid pain? Circling back, pedigree value should be seen incommensurate with the privilege of higher education on the condition that it is digested in full.
      </>
    },
    {
      id: 3,
      html: <>
        Feigned passion is a hazardous byproduct of our search for meaning, and it only grows more toxic every second we cannot convince ourselves that it isn't. It wasn't until recently that my ambitions were handed to me broken, though instead of resorting to the defeatist principles of dismissing losses as <span><i>it is what it is;</i></span> the defeatist principles of inhibiting every gladiatorial opportunity through lulls of complacency; the defeatist principles of resorting to drone for hives believing it is worth the steady flow of sweetness until it riles upon my differences—well, I journeyed. Unique experiences help materialize ambition, the same one in my case, and they form a healthy mental framework to automate quality behaviors and habits. Do you consider yourself a drone? How easy was it to pick your own road? To separate happiness from sweetness?
      </>
    },
    {
      id: 4,
      html: <>
        If you find yourself lost but hold the same anti-fatalistic tenacity that I do, there are <span><a href="https://roadmap.sh/" target="_blank" rel="noopener noreferrer">resources</a></span> in the personal channel for you to look at, it should add some direction. Be reminded that you are not bludgeoned to modify your lifestyle or absorb my credos, though I would believe based off presumptions that tweaks here and there are necessary. Rather, you are invited to think that you are not you; that you have no sieves, allowing the permeation of other characters into your own. That said, are you truly not alone? Or, are you truly underprivileged or disadvantaged when comparing yourself to others, be it in skill or even in absence of partnership? Or  have you not made these prudent thoughts of well-being, which in that case resurfaces the question: are you yourself? 
      </>
    },
    {
      id: 5,
      html: <>
        Popular theory is the Freudian iceberg but its implications are overlooked. Paul has caught my attention because he's determined to point out his flaws, problems, and impasses in progress. Does he have someone who can deal with it rather than comment on it? If people argue time's a constant that conflicts with opportunity then they'd sweat their reasons when evaluating their use of it. If the "didn't know" and "you should've" statements are accepted as rectification then wouldn't you consider that unfriendly? To not acknowledge whats below your iceberg, or Paul's? Well maybe the both of you give it no mind, or maybe my understanding of your social life had become extremely distorted through no contact. From occasional snoops I intuited that you both are capable people. Unsure of how Paul's doing within fitness, but from the story of his first experience it just shows misguidance though a tailored program might've been difficult to systemize. Going back on the idea of questioning your own identity, the only time it's acceptable to collectively be shallow copies of your coteries is if you are more certain than them in its fulfillment. Make me aware, if not yourself then who makes known the value of the decisions you make?
      </>
    },
    {
      id: 6,
      html: <>
        Parkinson’s law, entropy, regrets of dying, Einstellung effect, overfitting, survivorship bias, Deweyan recreation theory, there’re too much to discuss, but not with continued assumptions. Must have certainty. In spite of it all, you may have already known your self, and your future.
      </>
    },
  ];

  function RightArrow() {
    let withinLimit = letterPart < part.length - 1;
    return (
      <button 
        className={`${!withinLimit ? 'animate-none' : 'animate-pulse'}`}
        onClick={withinLimit && (() => setLetterPart(letterPart + 1))}
      >
        <svg
          className={`h-12 w-12`}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z" fill="currentColor" />
        </svg>
      </button>
    );
  }

  function LeftArrow() {
    let isZero = letterPart === 0;
    return (
      <button 
        className={`${isZero ? 'animate-none' : 'animate-pulse'}`}
        onClick={!isZero && (() => setLetterPart(letterPart - 1))}
      >
        <svg
          className={`h-12 w-12`}
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 6L15.41 7.41L10.83 12L15.41 16.59L14 18L8 12L14 6Z" fill="currentColor" />
        </svg>
      </button>
    );
  }

  return (
    <>
      <div id="letter" className="grid snap-y grid-cols-1 place-items-center w-2/3 mx-auto justify-center place-content-center">
        <FadeInSection>
          <div id="letter-block" className="relative flex text-center min-h-screen">
            <p className="relative place-self-center snap-always snap-center">
              {part[letterPart].html}
              <div className={`flex flex-row gap-96 max-sm:gap-[13rem] mt-8 place-content-center`}>
                <LeftArrow />
                <RightArrow />
              </div>
            </p>
          </div>
        </FadeInSection>
      </div>
    </>
  );
}
