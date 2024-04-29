const FAQ = () => {
  return (
    <div className="flex flex-col items-center my-[30px]">
      <div className="flex flex-col text-center ">
        <h1 className="text-4xl ">Nexcent frequently asked questions</h1>
        <p className="mb-[20px]">
          Look throw this commonly asked questions about Nexcent.
        </p>
      </div>
      <ul className="flex flex-col gap-[15px]">
        <li>
          <a href="#">Top questions</a>
        </li>
        <li>
          <a href="#">Renewals, cancellations, and billing</a>
        </li>
        <li>
          <a href="#">About Nexcent</a>
        </li>
        <li>
          <a href="#">Language support for Nexcent</a>
        </li>
        <li>
          <a href="#">About our clients </a>
        </li>
        <li>
          <a href="#">Support and resources </a>
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
