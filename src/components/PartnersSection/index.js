import clsx from "clsx";
import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Divider from "@site/src/components/Layout/Divider";
import TitleBox from "@site/src/components/Layout/TitleBox";

// shows a partner (svg) logo and a link below
function LogoWithLink({ imageName, label, link }) {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.imageWrap}>
        <ThemedImage
          alt={label}
          sources={{
            light: useBaseUrl(`/img/logos/${imageName}.svg`),
            dark: useBaseUrl(`/img/logos/${imageName}-dark.svg`),
          }}
        />
      </div>
      <div className={styles.linkWrap}>
        <Link to={link} className={styles.link}>
          {label}
        </Link>
      </div>
    </div>
  );
}

// the actual list of partners
const PartnerItemList = [
  {
    imageName: "cardanofoundation",
    label: "Explore the Cardano Foundation",
    link: "partners",
  },
  {
    imageName: "iog",
    label: "Find out Input Output Global",
    link: "partners",
  },
  {
    imageName: "emurgo",
    label: "Learn about EMURGO",
    link: "partners",
  },
];

function PartnerItem({ imageName, label, link }) {
  return <LogoWithLink imageName={imageName} label={label} link={link} />;
}

// FIXME: text feels outdated, today there are way more entitites, we should aim to increase this soon
export default function PartnerSection() {
  return (
    <section className={styles.partnerSection}>
      <Divider text="Partners" />
      <TitleBox
        description="A decentralized team works across three independent entities to ensure that Cardano stays true to its purpose as we advance and evolve."
        titleType="none"
        headingDot={false}
      />
      <div className={styles.discoverWrap}>
        <div className={styles.discoverItems}>
          {PartnerItemList.map((props, idx) => (
            <PartnerItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}