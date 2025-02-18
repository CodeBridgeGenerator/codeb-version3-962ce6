
    module.exports = function (app) {
        const modelName = "locale";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "ProjectId, dropdown, false, false, false, true, false, false, false, projects, projects, one-to-one, projectName," },
localeName: { type:  String , comment: "Locale Name, p, false, false, false, true, false, false, false, , , , ," },
dateFormat: { type:  String , comment: "Date Format, p, false, false, false, true, false, false, false, , , , ," },
timeFormat: { type:  String , comment: "Time Format, p, false, false, false, true, false, false, false, , , , ," },
timeZone: { type:  String , comment: "Time Zone, p, false, false, false, true, false, false, false, , , , ," },
currencyFormat: { type:  String , comment: "Currency Format, p, false, false, false, true, false, false, false, , , , ," },
currencyIndex: { type:  String , comment: "Currency Index, p, false, false, false, true, false, false, false, , , , ," },
currencySymbol: { type:  String , comment: "Currency Symbol, p, false, false, false, true, false, false, false, , , , ," },
country: { type:  String , comment: "Country , p, false, false, false, true, false, false, false, , , , ," },
language: { type:  String , comment: "Language, p, false, false, false, true, false, false, false, , , , ," },
languages: { type:  String , comment: "Languages, p, false, false, false, true, false, false, false, , , , ," },
intlDialing: { type: Number, comment: "Intl Dialing, p_number, false, false, false, true, false, false, false, , , , ," },
isDefault: { type: Boolean, required: false, comment: "isDefault, p_boolean, false, false, false, true, false, false, false, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };