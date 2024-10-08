
export const asyncHandler = (requestHandler) => {
    return (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}



// export const asyncHandler = (fn) => async (req, res, next) => {
//     try{
//         await fn(req, re, next)
//     }catch (error) {
//         res.status( err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }


