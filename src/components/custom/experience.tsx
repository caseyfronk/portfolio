import { ExperienceCard } from "./experience-card";

export function Experience() {
  return (
    <>
      <ExperienceCard
        title="Senior Software Engineer"
        company="Wyssling Consulting"
        yearStart="2021"
        yearEnd="Present"
      >
        <li>
          Led the development of a React, Node, and PostgreSQL CRM platform for
          managing solar projects for over 300 clients, replacing a costly
          ($8,000/mo) RDP server and improving productivity, accuracy, and
          client-satisfaction.
        </li>
        <li>
          Built an API for clients to automate project submission and
          drastically reduce turnaround times.
        </li>
        <li>
          Developed an invoice system that aggregates project details and
          services rendered, and generates a PDF.
        </li>
        <li>
          Collaborated with structural and electrical engineers to build a queue
          system for seamless internal project review and hand-off.
        </li>
        <li>
          Led a team of 3. Conducting code reviews, teaching scalable design
          patterns, and collaborative feature planning.
        </li>
        <li>
          Configured automated deployments via AWS using Github, Elastic
          Beanstalk, EC2, and CodePipeline.
        </li>
      </ExperienceCard>

      <ExperienceCard
        title="Frontend Engineer (React)"
        company="SkyFine USA"
        yearStart="2020"
        yearEnd="2021"
      >
        <li>
          Migrated an existing PHP service to React, React Native, and Kotlin.
        </li>
        <li>
          Built an intuitive mobile app for technicians to install wireless
          Ignition Interlock Devices (IID) and configure them via Bluetooth.
        </li>
        <li>
          Designed a React dashboard for reviewing BAC, photo, and location data
          captured by GPS-enabled Ignition Interlock Devices (IID).
        </li>
        <li>
          Built a React Native enrollment process for end-users to provide
          photos of their driver&apos;s license and all court-ordered
          identification details.
        </li>
      </ExperienceCard>

      <ExperienceCard
        title="Network Administrator"
        company="Younique"
        yearStart="2014"
        yearEnd="2018"
      >
        <li>
          Managed local network infrastructure. Configured routers, switches,
          firewalls, VLANs, and a dual-ISP failover.
        </li>
        <li>
          Ran Cat-5 cables between server rooms, floors, and cubicles in a
          5-story building and adjacent warehouse.
        </li>
        <li>Troubleshooting and IT help-desk for over 700 employees.</li>
        <li>IT Onboarding, user-provisioning, and hardware configuration.</li>
      </ExperienceCard>
    </>
  );
}
