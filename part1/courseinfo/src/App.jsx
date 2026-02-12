const Total = ({parts}) => {
	return (
		<>
			{parts.exercise}
			<p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises} </p>
		</>
	);
};

// part
const Part = ({name, exercises}) => {
	return (
		<>
			<p>
				{name} {exercises}
			</p>
		</>
	);
};

const Content = ({parts}) => {
	return (
		<>
			{parts.map((part, index) => (
				<Part 
					key={index}
					name={part.name}
					exercises={part.exercises}
				/>
			))}
		</>
	);
};

const Header = (course) => {
	return (
		<>
			<h1>{course.course.name}</h1>
		</>
	);
};

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	}

	return(
		<div>
			<Header course={course} />
			<Content parts={course.parts}/>
			<Total parts={course.parts}/>
		</div >
	);
};

export default App;
