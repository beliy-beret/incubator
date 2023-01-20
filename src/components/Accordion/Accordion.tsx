type AccordionPropsType = {
  title: string;
  collapsed: boolean;
};
export default function Accordion({ title, collapsed }: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle value={title} />
      {!collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitleProps = {
  value: string;
};

function AccordionTitle({ value }: AccordionTitleProps) {
  console.log("AccordionTitle");
  return <h3>{value}</h3>;
}

function AccordionBody() {
  console.log("AccordionBody");
  return (
    <ul>
      <li>item</li>
      <li>item</li>
      <li>item</li>
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ul>
  );
}
