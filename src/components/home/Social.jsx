import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://twitter.com/Med5Lemzi"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-twitter-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/mohamed-lamine-808167255/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/Med5KDB"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a
        href="https://discord.com/channels/@me/1047197009175642162"
        className="home__social-icon"
        target="_blank"
      >
        <i class="bx bxl-discord-alt"></i>
      </a>
    </div>
  );
};

export default Social;
