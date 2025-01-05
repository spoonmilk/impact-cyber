import TrustedResources from "../components/TrustedResources/TrustedResources"; // Ensure this path is correct

export const TrustedResourcesPage = () => {
  const resources = [
    {
      logo: "https://citizenlab.ca/wp-content/themes/citizenlab-213/library/images/CL-logo-3-headed.png",
      title: "The Citizen Lab",
      description:
        "A research laboratory focusing on protecting vulnerable populations from cyber-persecution",
      link: "https://citizenlab.ca",
      extraInfo:
        "The Citizen Lab is an interdisciplinary research laboratory based at the University of Toronto that focuses on the intersection of information technology, human rights, and global security. It conducts research on issues like digital espionage, internet censorship, and privacy concerns.",
    },
    {
      logo: "https://citizenlab.ca/wp-content/themes/citizenlab-213/library/images/CL-logo-3-headed.png",
      title: "The Citizen Lab",
      description:
        "A research laboratory focusing on protecting vulnerable populations from cyber-persecution",
      link: "https://citizenlab.ca",
      extraInfo:
        "The Citizen Lab is an interdisciplinary research laboratory based at the University of Toronto that focuses on the intersection of information technology, human rights, and global security. It conducts research on issues like digital espionage, internet censorship, and privacy concerns.",
    },
  ];

  return (
    <div className="page-container card-background">
      <div className="page-content">
        <h1 className="about-title">Trusted Security Resources</h1>
        <div className="story">
          <p >
            The greatest barrier to cybersecurity is knowledge. Here are some of our favorite online resources to learn more about data privacy and how you can protect yourself online.
          </p>
        </div>
        <div className="resources-list">
          {resources.map((resource, index) => (
            <TrustedResources key={index} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedResourcesPage;
