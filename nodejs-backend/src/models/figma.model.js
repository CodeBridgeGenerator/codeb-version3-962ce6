
    module.exports = function (app) {
        const modelName = "figma";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            projectId: { type: Schema.Types.ObjectId, ref: "projects", comment: "ProjectId, dropdown, false, false, false, true, false, false, false, projects, projects, one-to-one, projectName," },
name: { type:  String , comment: "Name, p, false, false, false, true, false, false, false, , , , ," },
fileId: { type:  String , comment: "File Id, p, false, false, false, true, false, false, false, , , , ," },
description: { type:  String , comment: "Description, p, false, false, false, true, false, false, false, , , , ," },
isDefault: { type: Boolean, required: false, comment: "isDefault, p_boolean, false, false, false, true, false, false, false, , , , ," },
textBody: { type:  String , comment: "Text Body, p, false, false, false, true, false, false, false, , , , ," },
textEmphasis: { type:  String , comment: "Text Emphasis, p, false, false, false, true, false, false, false, , , , ," },
textSecondary: { type:  String , comment: "Text Secondary, p, false, false, false, true, false, false, false, , , , ," },
textTertiary: { type:  String , comment: "Text Tertiary, p, false, false, false, true, false, false, false, , , , ," },
textCode: { type:  String , comment: "Text Code, p, false, false, false, true, false, false, false, , , , ," },
textHighlight: { type:  String , comment: "Text Highlight, p, false, false, false, true, false, false, false, , , , ," },
bgBorderTranslucent: { type:  String , comment: "Bg Border-Translucent, p, false, false, false, true, false, false, false, , , , ," },
bgBody: { type:  String , comment: "Bg Body, p, false, false, false, true, false, false, false, , , , ," },
bgBorder: { type:  String , comment: "Bg Border, p, false, false, false, true, false, false, false, , , , ," },
bgHighlight: { type:  String , comment: "Bg Highlight, p, false, false, false, true, false, false, false, , , , ," },
bgSecondary: { type:  String , comment: "Bg Secondary, p, false, false, false, true, false, false, false, , , , ," },
bgTertiary: { type:  String , comment: "Bg Tertiary, p, false, false, false, true, false, false, false, , , , ," },
formInvalidBorder: { type:  String , comment: "Form Invalid-Border, p, false, false, false, true, false, false, false, , , , ," },
formInvalidBg: { type:  String , comment: "Form Invalid-Bg, p, false, false, false, true, false, false, false, , , , ," },
formValidBorder: { type:  String , comment: "Form Valid-Border, p, false, false, false, true, false, false, false, , , , ," },
formValidBg: { type:  String , comment: "Form Valid-Bg, p, false, false, false, true, false, false, false, , , , ," },
textHeading: { type:  String , comment: "Text Heading, p, false, false, false, true, false, false, false, , , , ," },
textLink: { type:  String , comment: "Text Link, p, false, false, false, true, false, false, false, , , , ," },
textLinkHover: { type:  String , comment: "Text Link-Hover, p, false, false, false, true, false, false, false, , , , ," },
signalPrimaryFill: { type:  String , comment: "Signal Primary-Fill, p, false, false, false, true, false, false, false, , , , ," },
signalPrimaryBg: { type:  String , comment: "Signal Primary-Bg, p, false, false, false, true, false, false, false, , , , ," },
signalPrimaryBorder: { type:  String , comment: "Signal Primary-Border, p, false, false, false, true, false, false, false, , , , ," },
signalPrimaryText: { type:  String , comment: "Signal Primary-Text, p, false, false, false, true, false, false, false, , , , ," },
signalSecondaryFill: { type:  String , comment: "Signal Secondary-Fill, p, false, false, false, true, false, false, false, , , , ," },
signalSecondaryBg: { type:  String , comment: "Signal Secondary-Bg, p, false, false, false, true, false, false, false, , , , ," },
signalSecondaryBorder: { type:  String , comment: "Signal Secondary-Border, p, false, false, false, true, false, false, false, , , , ," },
signalSecondaryText: { type:  String , comment: "Signal Secondary-Text, p, false, false, false, true, false, false, false, , , , ," },
signalTertiaryFill: { type:  String , comment: "Signal Tertiary-Fill, p, false, false, false, true, false, false, false, , , , ," },
signalTertiaryBg: { type:  String , comment: "Signal Tertiary-Bg, p, false, false, false, true, false, false, false, , , , ," },
signalTertiaryBorder: { type:  String , comment: "Signal Tertiary-Border, p, false, false, false, true, false, false, false, , , , ," },
signalTertiaryText: { type:  String , comment: "Signal Tertiary-Text, p, false, false, false, true, false, false, false, , , , ," },
signalSuccessFill: { type:  String , comment: "Signal Success-Fill, p, false, false, false, true, false, false, false, , , , ," },
signalSuccessBg: { type:  String , comment: "Signal Success-Bg, p, false, false, false, true, false, false, false, , , , ," },
signalSuccessBorder: { type:  String , comment: "Signal Success-Border, p, false, false, false, true, false, false, false, , , , ," },
signalSuccessText: { type:  String , comment: "Signal Success-Text, p, false, false, false, true, false, false, false, , , , ," },
signalInfoFill: { type:  String , comment: "Signal Info-Fill, p, false, false, false, true, false, false, false, , , , ," },
signalInfoBg: { type:  String , comment: "Signal Info-Bg, p, false, false, false, true, false, false, false, , , , ," },
signalInfoBorder: { type:  String , comment: "Signal Info-Border, p, false, false, false, true, false, false, false, , , , ," },
signalInfoText: { type:  String , comment: "Signal Info-Text, p, false, false, false, true, false, false, false, , , , ," },
signalDangerFill: { type:  String , comment: "Signal Danger-Fill, p, false, false, false, true, false, false, false, , , , ," },
signalDangerBg: { type:  String , comment: "Signal Danger-Bg, p, false, false, false, true, false, false, false, , , , ," },
signalDangerBorder: { type:  String , comment: "Signal Danger-Border, p, false, false, false, true, false, false, false, , , , ," },
signalDangerText: { type:  String , comment: "Signal Danger-Text, p, false, false, false, true, false, false, false, , , , ," },
signalWarningFill: { type:  String , comment: "Signal Warning-Fill, p, false, false, false, true, false, false, false, , , , ," },
signalWarningBg: { type:  String , comment: "Signal Warning-Bg, p, false, false, false, true, false, false, false, , , , ," },
signalWarningBorder: { type:  String , comment: "Signal Warning-Border, p, false, false, false, true, false, false, false, , , , ," },
signalWarningText: { type:  String , comment: "Signal Warning-Text, p, false, false, false, true, false, false, false, , , , ," },
signalInvertFill: { type:  String , comment: "Signal Invert-Fill, p, false, false, false, true, false, false, false, , , , ," },
signalInvertBg: { type:  String , comment: "Signal Invert-Bg, p, false, false, false, true, false, false, false, , , , ," },
signalInvertBorder: { type:  String , comment: "Signal Invert-Border, p, false, false, false, true, false, false, false, , , , ," },
signalInvertText: { type:  String , comment: "Signal Invert-Text, p, false, false, false, true, false, false, false, , , , ," },
components: { type: Schema.Types.Mixed , comment: "Components, p, false, false, false, true, false, false, false, , , , ," },

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