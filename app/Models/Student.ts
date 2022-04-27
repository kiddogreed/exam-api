import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public attendance:string
  
  @column()
  public assignments:string
  
  @column()
  public quizzes:string

  
  @column()
  public exams:string
  // (attendance, assignments, quizzes, and exams)

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
