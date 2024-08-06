type SourceLinksProps = {
    sourceUrls: string[];
  };
  
  const SourceLinks = ({ sourceUrls }: SourceLinksProps) => {
    return (
      <p>
        {sourceUrls.map((url, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            Source {index + 1}
          </a>
        ))}
      </p>
    );
  };
  
  export default SourceLinks;
  