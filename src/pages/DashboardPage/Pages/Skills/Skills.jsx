import PagesLayout from "../../layouts/PagesLayout"
import K from "../../../../konstants"

const Skills = () => {
  return (
    <PagesLayout headerText="Skills" buttonText="Add New Skills">
      <div className="grid grid-cols-4 gap-6">
        {K.SKILLS.map(({name, levelOfProficiency,}) => (
          <div key={index} className="h-40 sh">
            <span>{name}</span>
            <span>{levelOfProficiency}</span>
          </div>
        ))} 
      </div>
    </PagesLayout>
  )
}

export default Skills;