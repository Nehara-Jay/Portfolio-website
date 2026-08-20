import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, demoUrl, tags }) => {
  
  // This function checks the language name and returns custom colors for the pill tags
  const getTagColor = (tag) => {
    const lowerTag = tag.toLowerCase(); // Makes it case-insensitive
    switch(lowerTag) {
      case 'react':
      case 'react native':
        return { bg: 'rgba(97, 219, 251, 0.15)', text: '#61dbfb', border: '#61dbfb' };
      case 'node.js':
      case 'nodejs':
        return { bg: 'rgba(60, 135, 58, 0.15)', text: '#47a248', border: '#47a248' };
      case 'mongodb':
        return { bg: 'rgba(77, 179, 61, 0.15)', text: '#4db33d', border: '#4db33d' };
      case 'python':
        return { bg: 'rgba(255, 212, 59, 0.15)', text: '#FFD43B', border: '#FFD43B' }; 
      case 'data science':
        return { bg: 'rgba(255, 153, 0, 0.15)', text: '#ff9900', border: '#ff9900' };
      case 'express':
        return { bg: 'rgba(255, 255, 255, 0.2)', text: '#ffffff', border: '#ffffff' };
      default:
        // The default grey styling for any other languages you type
        return { bg: 'rgba(255, 255, 255, 0.15)', text: '#e0e0e0', border: '#a0a0a0' }; 
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="description">{description}</span>
          
          {/* Action Buttons (Bigger, placed ABOVE the tags) */}
          <div className="project-links" style={{ marginTop: '20px', marginBottom: '15px' }}>
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-2 rounded-pill" style={{ padding: '8px 24px', fontWeight: 'bold' }}>
                GitHub
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light mx-2 text-dark rounded-pill" style={{ padding: '8px 24px', fontWeight: 'bold' }}>
                Live Demo
              </a>
            )}
          </div>

          {/* Tech Stack Tags (Smaller, Pill-shaped, Dynamic Colors) */}
          <div className="tech-tags">
            {tags && tags.map((tag, index) => {
              const colors = getTagColor(tag);
              return (
                <span key={index} style={{ 
                  display: 'inline-block',
                  backgroundColor: colors.bg,
                  color: colors.text,
                  border: `1px solid ${colors.border}`,
                  padding: '4px 14px', // Creates the pill shape
                  borderRadius: '20px', // Rounds the edges completely
                  fontSize: '11px',
                  margin: '4px 4px',
                  fontWeight: '600',
                  letterSpacing: '0.5px'
                }}>
                  {tag}
                </span>
              )
            })}
          </div>
          
        </div>
      </div>
    </Col>
  )
}