import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Student from 'App/Models/Student'

export default class TeachersController {

  public async index({request, response}:HttpContextContract){

    const filters = request.only(['attendance', 'assignment', 'quiz', 'exam'])
    const meta = request.only(["page", "per_page"])
    const querys = Student.query()
    if (filters.attendance) {
      querys.where('attendance', filters.attendance)
    }
    if (filters.assignment) {
      querys.where('assignment', filters.assignment)
    }
    if (filters.quiz) {
      querys.where('quiz', filters.quiz)
    }
    if (filters.exam) {
      querys.where('exam', filters.exam)
    }
   
    const data = await querys.orderBy('id','desc')  
    .paginate(meta.page, meta.per_page)
    return response.ok({
      message:"ok",
      students:data
    })
  }

  

  public async store({request, response}:HttpContextContract){
    const attendance = request.input('attendance')
    const assignment = request.input('assignment')
    const quizzes = request.input('quizzes')
    const exams = request.input('exams')

   await  Student.create({
     attendance: attendance,
     assignments: assignment,
     quizzes:quizzes,
     exams: exams
   })

   return response.created({
     message: " Student Accepted",
     data:{
      attendance: attendance,
      assignments: assignment,
      quizzes:quizzes,
      exams: exams
     }
   })
  }
  public async update({params, request,response}:HttpContextContract){
    const attendance = request.input('attendance')
    const assignment = request.input('assignment')
    const quizzes = request.input('quizzes')
    const exams = request.input('exams')

    const student = await Student.findOrFail(params.id)
    student.assignments = assignment
    student.attendance = attendance
    student.quizzes = quizzes
    student.exams = exams
    student.save()

    return response.ok({
      message: "Student Updates"
    })

  }
  public async destroy({params,response}:HttpContextContract){
    const student = await Student.findOrFail(params.id)

    student.delete()
    return response.accepted({
      message: " Student Deleted",
    })
  } 
}
