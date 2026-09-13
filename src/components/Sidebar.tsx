import profilePhoto from '../../71RP-kGPKoL._AC_UF894,1000_QL80_.jpg'

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Contact">
      <div className="profile-photo">
        <img src={profilePhoto} alt="Saw Naing" />
      </div>
      <a className="sidebar-email" href="mailto:synwill7777@gmail.com">
        synwill7777@gmail.com
      </a>
      <a className="sidebar-email" href="mailto:willsyn77@gmail.com">
        willsyn77@gmail.com
      </a>
      <a className="sidebar-resume" href="/resumes/Saw.Naing.Resume.FS.pdf" download>
        Download Resume (Full Stack)
      </a>
      <a className="sidebar-resume" href="/resumes/Saw.Naing.Resume.BE.pdf" download>
        Download Resume (Backend)
      </a>

      <section className="work-history" aria-labelledby="work-history-title">
        <h2 id="work-history-title">Work History</h2>
        <ol className="work-timeline">
          <li>
            <time dateTime="2026-01/2026-09">Jan. 2026 - Sept. 2026</time>
            <h3>Backend/Platform Engineer (Contract)</h3>
            <p>InyaLand</p>
            <span>IT Consulting &amp; Modernization | Client: Ooredoo Myanmar</span>
            <details className="work-details">
              <summary>Selected contributions</summary>
              <ul className="work-achievements">
                <li>
                  Built a resilient Kubernetes telemetry pipeline with Go and
                  Azure Event Hubs, implementing prioritized resync logic that
                  reduced estimated data loss during network outages by 20%.
                </li>
                <li>
                  Provisioned AKS clusters, node pools, and Azure Cosmos DB with
                  Terraform, configuring autoscaling and node auto-repair to
                  reduce estimated manual intervention by 15%.
                </li>
                <li>
                  Established local Kubernetes monitoring with Prometheus and
                  Grafana as part of a four-engineer observability team,
                  preserving site-level visibility during network outages while
                  integrating with centralized platform monitoring.
                </li>
                <li>
                  Contributed to GitHub Actions CI/CD pipelines supporting
                  build, test, and container-scanning workflows for Go-based
                  Kubernetes services across the platform.
                </li>
                <li>
                  Designed an AI summarization pipeline with Azure AI Foundry,
                  data pre-aggregation, and gap detection, reducing LLM token
                  usage by approximately 25% while flagging incomplete data.
                </li>
              </ul>
            </details>
          </li>
          <li>
            <time dateTime="2024-05">May 2024 - Present</time>
            <h3>Software Engineer</h3>
            <p>OS Analytics</p>
            <span>Open Source Web Analytics Platform</span>
          </li>
        </ol>
      </section>
    </aside>
  )
}
