const authorStyel = {
  display: 'flex',
  padding: '0px',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px',
}

export default function AuthorCard() {
  return (
    <a href="https://www.linkedin.com/in/shadid-haque/">
    <div style={authorStyel}>
      <img 
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGOWoKO9BeG4g/profile-displayphoto-shrink_800_800/0/1639552550951?e=1675296000&v=beta&t=_tLlaGmvWQFJ_xIOcNVtFn_FP7vdisCu97LPGzJuxf8" alt="Shadid"
        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
      />
      <div>
        <span>By Shadid Haque</span>
        <br />
        <span>Dev Rel @ Fauna</span>
      </div>
    </div>
    </a>
  )
}