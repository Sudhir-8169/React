const ChildOne = ({ sharedState, setSharedState }) => {
    return (
        <div>
            <p>Child One: {sharedState}</p>
            <button
             style={{cursor: 'pointer',padding:'8px'}}
             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
             onClick={() => setSharedState("Updated by Child One!")}>
                Update State
            </button>
        </div>
    );
};

export default ChildOne;