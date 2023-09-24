import Email from "../../static/svg/Email";
import LinkedIn from "../../static/svg/LinkedIn";

export default function Socials() {
  return (
    <ul className='flex flex-col items-center gap-5'>
      <li>
        <a href='#' title='Go to my LinkedIn'>
          <LinkedIn />
        </a>
      </li>
      <li>
        <a href='#' title='Contact me via email'>
          <Email />
        </a>
      </li>
    </ul>
  );
}
