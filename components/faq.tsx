import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  return (
    <div className="p-6 md:px-72 md:p-10">
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
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className={undefined}>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className={undefined}>
          <AccordionTrigger className={"cursor-pointer"}>
            Is it styled?
          </AccordionTrigger>
          <AccordionContent className={undefined}>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className={undefined}>
          <AccordionTrigger className={"cursor-pointer"}>
            Is it animated?
          </AccordionTrigger>
          <AccordionContent className={undefined}>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
