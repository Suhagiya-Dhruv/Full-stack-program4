import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Correct import for Select
import { createQuiz, getQuizList } from "@/store/quizSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Quiz = () => {
    const { quiz } = useSelector((state: RootState) => state.quiz);
    const dispatch: any = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
        startTime: new Date(),
        duration: 0,
        category: "Maths",
    });

    useEffect(() => {
        dispatch(getQuizList());
    }, []);

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCategoryChange = (value: string) => {
        setFormData((prev) => ({ ...prev, category: value }));
    };

    const handleSubmit = () => {
        setIsDialogOpen(false);
        console.log(formData)
        dispatch(createQuiz(formData));
        setFormData({
            name: "",
            startTime: new Date(),
            duration: 0,
            category: "Maths",
        });
    };

    return (
        <div className="p-2">
            <div className="flex justify-between">
                <h1 className="text-xl font-bold">Quiz Management</h1>
                <Button onClick={() => setIsDialogOpen(true)}>Create Quiz</Button>
            </div>

            {/* Dialog */}
            {isDialogOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-lg font-bold mb-4">Create Quiz</h2>
                        <div className="flex flex-col gap-2">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Quiz Name"
                                className="p-2 border rounded-md"
                            />
                            <input
                                type="datetime-local"
                                name="startTime"
                                // value={formData.startTime}
                                onChange={handleChange}
                                placeholder="Start Time"
                                className="p-2 border rounded-md"
                            />
                            <input
                                type="number"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                placeholder="Duration (in minutes)"
                                className="p-2 border rounded-md"
                            />
                            <Select
                                value={formData.category}
                                onValueChange={handleCategoryChange}
                            // className="p-2 border rounded-md"
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Maths">Maths</SelectItem>
                                    <SelectItem value="Science">Science</SelectItem>
                                    <SelectItem value="Hindi">Hindi</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="flex justify-end gap-2 mt-4">
                                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                                    Cancel
                                </Button>
                                <Button onClick={handleSubmit}>Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Quiz Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {quiz.map((quiz, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-300 p-4 rounded-lg shadow-md"
                    >
                        <h3 className="text-lg font-bold">{quiz.name}</h3>
                        <p>
                            <span className="font-semibold">Start Time:</span>{" "}
                            {new Date(quiz.startTime).toLocaleString()}
                        </p>
                        <p>
                            <span className="font-semibold">Duration:</span> {quiz.duration}{" "}
                            mins
                        </p>
                        <p>
                            <span className="font-semibold">Category:</span> {quiz.category}
                        </p>
                        <div className="flex justify-end gap-2 mt-4">
                            <Button variant="outline" size="sm">
                                Edit
                            </Button>
                            <Button variant="destructive" size="sm">
                                Delete
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
