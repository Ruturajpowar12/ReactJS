import Card from './components/Card'

function App() {

  const jobs = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1706426629246-2a3c3e3e3ff2?w=1000&auto=format&fit=crop&q=60',
      company: 'Google',
      salary: 200
    },

    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1704089272382-201cf5c1bbbb?w=1000&auto=format&fit=crop&q=60',
      company: 'Microsoft',
      salary: 300
    },

    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1704204656144-3dd12c110dd8?w=1000&auto=format&fit=crop&q=60',
      company: 'Amazon',
      salary: 600
    },

    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=1000&auto=format&fit=crop&q=60',
      company: 'Apple',
      salary: 500
    },

    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?w=1000&auto=format&fit=crop&q=60',
      company: 'Netflix',
      salary: 450
    }
  ]

  return (
    <div className="cards-container">

      {
        jobs.map((item) => (
          <Card
            key={item.id}
            url={item.url}
            com={item.company}
            sal={item.salary}
          />
        ))
      }

    </div>
  )
}

export default App