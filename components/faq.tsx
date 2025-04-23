import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  return (
    <div className="p-6 pb-16 md:pb-20 md:px-72 md:p-10">
      <div className="text-center items-center">
        {/*  */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            FAQs
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/80 text-lg">
            Answers to frequently asked questions about us
          </p>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className={undefined}>
          <AccordionTrigger className={"cursor-pointer"}>
            What is SmartBalance?
          </AccordionTrigger>
          <AccordionContent className={undefined}>
            SmartBalance is a personal budgeting and expense tracking web app
            that helps you stay in control of your finances. Create budgets, log
            expenses, and visualize your spending — all in one clean and
            intuitive dashboard.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className={undefined}>
          <AccordionTrigger className={"cursor-pointer"}>
            Is SmartBalance free to use?
          </AccordionTrigger>
          <AccordionContent className={undefined}>
            Yes! SmartBalance is completely free to use. Just sign up and start
            managing your budgets effortlessly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className={undefined}>
          <AccordionTrigger className={"cursor-pointer"}>
            How do I create a new budget?
          </AccordionTrigger>
          <AccordionContent className={undefined}>
            Click on the "Budgets" tab from the sidebar, then hit the "Create
            New Budget" button. Just fill in your budget name and amount, and
            you're good to go!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className={undefined}>
          <AccordionTrigger className={"cursor-pointer"}>
            Can I track expenses for each budget separately?
          </AccordionTrigger>
          <AccordionContent className={undefined}>
            Absolutely. Each budget has its own detailed page where you can add
            and monitor expenses specific to that category.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className={undefined}>
          <AccordionTrigger className={"cursor-pointer"}>
            How do I know if I&apos;m overspending?
          </AccordionTrigger>
          <AccordionContent className={undefined}>
            SmartBalance uses visual indicators like progress bars and charts to
            show how much you&apos;ve spent versus your allocated budget.
            You&apos;ll know right away when you're nearing or exceeding your
            limits.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6" className={undefined}>
          <AccordionTrigger className={"cursor-pointer"}>
            Can I edit or delete a budget?
          </AccordionTrigger>
          <AccordionContent className={undefined}>
            Yes, each budget page includes options to edit or delete the budget.
            You&apos;re in full control of your financial plans.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7" className={undefined}>
          <AccordionTrigger className={"cursor-pointer"}>
            Is my data secure?
          </AccordionTrigger>
          <AccordionContent className={undefined}>
            Yes. Your data is stored securely, and we follow standard practices
            to ensure your personal financial information is protected.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8" className={undefined}>
          <AccordionTrigger className={"cursor-pointer"}>
            Do I need to download anything?
          </AccordionTrigger>
          <AccordionContent className={undefined}>
            No downloads needed! SmartBalance is a fully web-based application,
            so you can access it anytime, anywhere via your browser.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
