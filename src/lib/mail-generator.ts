export const mailContentGenerator = ({
  headerLabel,
  bodyContent,
  buttonLabel,
  buttonHref,
  buttonCode,
}: {
  headerLabel: string;
  bodyContent: string;
  buttonLabel?: string;
  buttonHref?: string;
  buttonCode?: string;
}) => {
  const mailContent = `<section
      style="
        min-height: 100vh;
        color: black;
        padding: 0;
        margin: 0;
      "
    >
      <header style="width: 100%; text-align: center">
        <h1 style="font-size: 13em; margin-top: 13vh; margin-bottom: 20px">
          Azin<span style="color: rgb(124, 58, 237)">Nail</span>
        </h1>
        <p
          style="
            font-size: 1rem;
            line-height: 1.25rem;
            color: hsl(220, 8.9%, 46.1%);
          "
        >
          ${headerLabel}
        </p>
      </header>
      <main style="width: 90%; margin: 4em auto">
        <h3 style="text-align: center; line-height: 1.3; margin-bottom: 50px">
          ${bodyContent}
        </h3>
        ${
          buttonLabel && buttonHref
            ? `<a
          href="${buttonHref}"
          style="
            display: block;
            padding: 10px 0;
            width: 200px;
            text-align: center;
            margin: 100px auto;
            background: rgba(124, 58, 237, 90%);
            border: 1px solid rgb(124, 58, 237);
            box-shadow: 0 0 10px rgb(124, 58, 237);
            color: white;
            border-radius: 10px;
            font-size: 1.2rem;
            text-decoration: none;
            cursor: pointer;
          "
        >
          ${buttonLabel}
        </a>`
            : ''
        }
        ${
          buttonCode
            ? `<div
      style="
        padding: 15px 0;
        width: 170px;
        text-align: center;
        margin: 100px auto;
        background: rgba(124, 58, 237, 90%);
        border: 1px solid rgb(124, 58, 237);
        box-shadow: 0 0 10px rgb(124, 58, 237);
        color: white;
        border-radius: 10px;
        font-size: 1.2rem;
      "
    >
      <p
        style="padding: 0 !important; margin: 0 !important; letter-spacing: 7px"
      >
        ${buttonCode}
      </p>
    </div>`
            : ''
        }
      </main>
    </section>
`;

  return mailContent;
};
